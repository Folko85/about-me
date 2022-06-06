const page_break = {mode: '', before: '.before', after: '.after', avoid: '.avoid'};
function generatePDF() {
    const element = document.getElementById('invoice');
    html2pdf()
        .from(element)
        .set({
            filename: 'GutorovMNJava.pdf',
            headless: true,
            slowMo: 150,
            pagebreak: page_break,
            jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
        .save();
}