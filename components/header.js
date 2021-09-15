import Link from 'next/link'
import Logo from '../public/logo-ccc.svg'

export default function Header() {
  return (
    <>
      <tr>
        <td style={{ borderCollapse: 'separate !important' }} width={800}>
          <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
            <tbody><tr>
              <td>
                <table width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                  <tbody><tr>
                    <td width={800} bgcolor="#f3f2f5">
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody><tr>
                          <td>
                            <div style={{ height: '12px', lineHeight: '12px', fontSize: '12px' }}>&nbsp;</div>
                            <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                              <tbody><tr>
                                <td style={{ paddingLeft: '24px', paddingRight: '24px', textAlign: 'center' }}>
                                  <div style={{ lineHeight: 'normal' }}><span style={{ color: '#204e88', fontFamily: 'PT Sans, Helvetica, Arial, sans-serif', fontSize: '14px', textAlign: 'center' }}>Newsletter</span></div>
                                </td>
                              </tr>
                              </tbody></table>
                            <div style={{ height: '12px', lineHeight: '12px', fontSize: '12px' }}>&nbsp;</div>
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
                  <table width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                    <tbody><tr>
                      <td width={800} bgcolor="#ffffff">
                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                          <tbody><tr>
                            <td>
                              <div style={{ height: '24px', lineHeight: '24px', fontSize: '24px' }}>&nbsp;</div>
                              <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                <tbody><tr>
                                  <td>
                                    <table cellSpacing={0} cellPadding={0} border={0} align="center">
                                      <tbody><tr>
                                        <td>
                                          <Link href="/">
                                            <a ><img src="https://commonwealthchamber.com/content/newsletters/2021/09/002/Abp5htkULIBKwaxlmXMZx2vzLexw3b.png" alt="" style={{ maxWidth: '149px', height: 'auto', margin: 'auto', display: 'block' }} width={149} border={0} /></a>
                                          </Link>
                                        </td>
                                      </tr>
                                      </tbody></table>
                                  </td>
                                </tr>
                                </tbody></table>
                              <div style={{ height: '24px', lineHeight: '24px', fontSize: '24px' }}>&nbsp;</div>
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

    </>
  )
}
