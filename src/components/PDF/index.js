import React, { useEffect } from 'react';
import styled from 'styled-components';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';

import Button from '~/components/Button';
import aggregateResponses from './aggregateResponses';

// const anmeldungPDFLink = "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf"
const anmeldungPDF = '/public/pdf/anmeldung_bei_der_meldebehoerde.pdf';
// const anmeldungPDF = "/public/pdf/test.pdf"

const CreatePDF = p => {
  const { steps } = p;

  const responseData = aggregateResponses(steps);

  const modifyPDF = async responses => {
    const existingPdfBytes = await fetch(anmeldungPDF).then(res =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const person1 = responses.persons.first.info;

    firstPage.drawText(person1.name.last, {
      x: 150,
      y: 575,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(person1.name.first, {
      x: 150,
      y: 545,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(person1.name.birth, {
      x: 150,
      y: 527,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(person1.name.other, {
      x: 150,
      y: 456,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(person1.sex, {
      x: 150,
      y: 512,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(person1.birth, {
      x: 150,
      y: 498,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(person1.religion, {
      x: 150,
      y: 484,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(person1.nationality, {
      x: 150,
      y: 470,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save()
    download(
      pdfBytes,
      'anmeldung_bei_der_meldebehoerde.pdf',
      'application/pdf'
    );
  }

  return (
    <div>
      <Button
        onClick={() => {
          modifyPDF(responseData);
        }}
      >
        Formular downloaden
      </Button>
    </div>
  );
};

export default CreatePDF;
