import React from 'react';
import resume from '../../assets/resume/John Oakley Resume UPDATED amended.pdf'
// import { PDFViewer } from '@react-pdf/renderer';

const Resume = () => {

    const onButtonClick = () => {
        fetch(resume).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = fileURL;
                link.download = resume;
                link.click();
            })
        })
    }

    return(
        <section>
            <h1>Résumé</h1>
            <iframe src={resume} title="resume" />
            <button onClick={onButtonClick}>
                Download Résumé
            </button>
        </section>
    );
}

export default Resume;