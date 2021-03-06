import React from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs'

import Button from '../Button';

// const anmeldungPDFLink = "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf"
const anmeldungPDF = "/pdf/anmeldung_bei_der_meldebehoerde.pdf"
// const anmeldungPDF = "/public/pdf/test.pdf"

const CreatePDF = p => {
  const { steps } = p;

  const modifyPDF = async (name) => {
    const existingPdfBytes = await fetch(anmeldungPDF).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(name, {
      x: 150,
      y: 575,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0)
    })

    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, "anmeldung_bei_der_meldebehoerde.pdf", "application/pdf");
  }

  return (
    <div>
      <Button onClick={() => {modifyPDF(steps.name.value)}}>Formular downloaden</Button>
    </div>
  )
}

export default CreatePDF;