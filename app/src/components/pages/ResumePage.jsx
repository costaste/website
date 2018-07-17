import React, { Component } from 'react';
// import pdfjsLib from 'pdfjs-dist';

class ResumePage extends Component {

    render() {
        // I thought I could use the below to keep the pdf as a local asset but it
        // seems that the drive viewer doesnt work with this? Or I'm doing it wrong...
        // const pdfUrl = 'https://drive.google.com/viewerng/viewer?embedded=true&url=' + location.origin + '/assets/pdf/PLACEHOLDER.pdf';
        const pdfSrc = 'https://drive.google.com/viewerng/viewer?embedded=true&url=http://docdro.id/EoFL4jW/resume-pdf.pdf'

        return (
          <div class='primaryContainer'>
            <h3>Resume</h3>
            {/* <embed src={pdfSrc} width="700" height="907" /> */}
            <iframe width="800" height="900" className="pdfViewer" src="https://www.docdroid.net/EoFL4jW/resume-pdf.pdf" frameborder="0" allowtransparency allowfullscreen></iframe>
          </div>
        )
    }
}

export default ResumePage;