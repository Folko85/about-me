const page_break = {mode: '', before: '.before', after: '.after', avoid: '.avoid'};

function generatePDF() {
    const element = document.getElementById('invoice');
    html2pdf()
        .from(element)
        .set({
            filename: 'GutorovmnJava.pdf',
            pagebreak: page_break,
            jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        })
        .save();
}