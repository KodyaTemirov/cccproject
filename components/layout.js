import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr>
            <td style={{ backgroundColor: "#e5e5e5", borderCollapse: "separate !important" }} valign="top" align="center">
              <table style={{ margin: "0 auto" }} id="brick_container" className="email-container" width="800" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
                <tbody>
                  {children}
                  <Footer />
                </tbody>
              </table>
            </td>

          </tr>

        </tbody>
      </table>

    </>
  )
}
