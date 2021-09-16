import React from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";


const GeneratePdf = ({ html }) => {
    const generatePdf = () => {
        const doc = new jsPDF("p", "pt", [800, 1132.1]);

        doc.html(document.querySelector("#content"), {
            callback: function (pdf) {
                pdf.save("Newsletter.pdf")
            }
        })
    };

    const generateImage = async () => {
        const image = await toPng(html.current, { quality: 0.95 });
        const doc = new jsPDF();

        doc.addImage(image, 'JPEG', 5, 22, 200, 160);
        doc.save();


    }
    return (

        <div className="button-container">
            <button onClick={generatePdf}>
                Get PDF
            </button>     </div>
    );
};

export default GeneratePdf;
