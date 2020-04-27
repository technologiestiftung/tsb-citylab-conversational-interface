import React, { useEffect } from 'react';
import styled from 'styled-components';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';

import Button from '~/components/Button';
import createPersonFields from './createFields/persons';
import createMaritalStatus from './createFields/maritalStatus';

// const anmeldungPDFLink = "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf"
const anmeldungPDF = '/public/pdf/anmeldung_bei_der_meldebehoerde.pdf';
// const anmeldungPDF = "/public/pdf/test.pdf"

const CreatePDF = p => {
  const { steps } = p;

  const person1 = createPersonFields(steps, 'p1');
  const person2 = createPersonFields(steps, 'p2');
  const maritalStatus = createMaritalStatus(steps);

  const aggregatedFields = { ...person1, ...person2, ...maritalStatus };

  const modifyPDF = async fields => {
    const existingPdfBytes = await fetch(anmeldungPDF).then(res =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const fieldsArray = Object.values(fields);

    fieldsArray.forEach(field => {
      firstPage.drawText(field.text, {
        x: field.x,
        y: field.y,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
    });

    const pdfBytes = await pdfDoc.save();
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
          modifyPDF(aggregatedFields);
        }}
      >
        Formular downloaden
      </Button>
    </div>
  );
};

export default CreatePDF;
