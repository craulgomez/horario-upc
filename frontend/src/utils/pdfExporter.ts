import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function exportElementAsPng(elementId: string, fileName: string = 'mi-horario-upc.png') {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Elemento de captura no encontrado');
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff'
  });

  const image = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = image;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export async function exportElementAsPdf(elementId: string, fileName: string = 'mi-horario-upc.pdf') {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Elemento de captura no encontrado');
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff'
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('landscape', 'pt', 'a4');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(fileName);
}
