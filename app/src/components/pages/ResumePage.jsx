import React, { Component } from 'react';

class ResumePage extends Component {

    render() {
        return (
          <div class='primaryContainer'>
            <h3>Resume</h3>
            <iframe width="800" height="900" className="pdfViewer" src="https://www.docdroid.net/EoFL4jW/resume-pdf.pdf" frameborder="0" allowtransparency allowfullscreen></iframe>
          </div>
        )
    }
}

export default ResumePage;
