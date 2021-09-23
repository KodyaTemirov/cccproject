import React from "react";
import { jsPDF } from "jspdf";


const GeneratePdf = ({ html, title, wordVersion, slug }) => {
    const generatePdf = () => {
        const doc = new jsPDF("p", "pt", [800, 1132.1]);

        doc.html(document.querySelector("#content"), {
            callback: function (pdf) {
                pdf.save(`${title}.pdf}`)
            }
        })
    };
    console.log("word", `https://commonwealthchamber.com/${slug}`)
    return (
        <>
            <tr>
                <td style={{ borderCollapse: 'separate !important' }} width={800}>
                    <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody><tr>
                            <td style={{ width: '768px' }}>
                                <table cellSpacing={0} cellPadding={0} border={0} align="left">
                                    <tbody><tr>
                                        <td style={{ borderCollapse: 'separate !important' }} width={768}>
                                            <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                <tbody><tr>
                                                    <td>
                                                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                            <tbody><tr>
                                                                <td className="eh" style={{ paddingLeft: '32px', textAlign: 'left', height: '40px' }}>

                                                                    <div style={{ lineHeight: 'normal' }}><a target="_blank" href={`https://commonwealthchamber.com/${slug}`}><span style={{ color: '#a8a8a9', fontFamily: 'PT Sans, Helvetica, Arial, sans-serif', fontSize: '14px', textDecoration: 'underline', textAlign: 'left' }}>View online</span></a></div>
                                                                </td>
                                                            </tr>
                                                            </tbody></table>
                                                    </td>
                                                    <td>
                                                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                            <tbody><tr>
                                                                <td className="eh" style={{ textAlign: 'center', height: '40px' }}>
                                                                    <div style={{ lineHeight: 'normal' }}><button onClick={generatePdf} ><span style={{ color: '#a8a8a9', fontFamily: 'PT Sans, Helvetica, Arial, sans-serif', fontSize: '14px', textDecoration: 'underline', textAlign: 'center' }}>PDF version</span></button></div>
                                                                </td>
                                                            </tr>
                                                            </tbody></table>
                                                    </td>
                                                    <td>
                                                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                                            <tbody><tr>
                                                                <td className="eh" style={{ textAlign: 'right', height: '40px' }}>

                                                                    {wordVersion.wordversion && <div style={{ lineHeight: 'normal' }}><a target="_blank" href={wordVersion.wordversion.mediaItemUrl}><span style={{ color: '#a8a8a9', fontFamily: 'PT Sans, Helvetica, Arial, sans-serif', fontSize: '14px', textDecoration: 'underline', textAlign: 'right' }}>Word version</span></a></div>}

                                                                </td>
                                                            </tr>
                                                            </tbody></table>
                                                    </td>
                                                </tr>
                                                </tbody></table>
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </td>
                        </tr>
                            <tr>
                                <td>
                                    <div style={{ height: '20px', lineHeight: '20px', fontSize: '20px' }}>&nbsp;</div>
                                </td>
                            </tr>
                        </tbody></table>
                </td>
            </tr>


        </>
    );
};

export default GeneratePdf;
