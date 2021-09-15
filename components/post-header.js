import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({
  title,
  coverImage,
}) {
  return (
    <>
      <tr>
        <td width={800} bgcolor="transparent">
          <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
            <tbody><tr>
              <td style={{ paddingLeft: '32px', width: '736px' }}>
                <table cellSpacing={0} cellPadding={0} border={0} align="left">
                  <tbody><tr>
                    <td style={{ borderCollapse: 'separate !important' }} width={736}>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody><tr>
                          <td style={{ width: '736px' }}>
                            <table cellSpacing={0} cellPadding={0} border={0} align="left">
                              <tbody><tr>
                                <td style={{ backgroundRepeat: 'no-repeat !important', backgroundPosition: 'center center !important', backgroundSize: 'cover !important', borderCollapse: 'separate !important' }} width={736} background={coverImage?.sourceUrl}>
                                  <div>
                                    <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                      <tbody><tr>
                                        <td>
                                          <div style={{ height: '150px', lineHeight: '150px', fontSize: '150px' }}>&nbsp;</div>
                                          <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                            <tbody><tr>
                                              <td style={{ textAlign: 'center' }}>
                                                <div style={{ lineHeight: 'normal' }}><span style={{ color: '#ffffff', letterSpacing: '1px', fontFamily: 'Aleo, Helvetica, Arial, sans-serif', fontSize: '30px', textAlign: 'center', fontWeight: 700 }}>{title}</span></div>
                                              </td>
                                            </tr>
                                            </tbody></table>
                                          <div style={{ height: '164px', lineHeight: '164px', fontSize: '164px' }}>&nbsp;</div>
                                        </td>
                                      </tr>
                                      </tbody></table>
                                  </div>
                                  {/*[if gte mso 9]>
          </v:textbox>
          </v:rect>
          <![endif]*/}
                                </td>
                              </tr>
                              </tbody></table>
                          </td>
                        </tr>
                          <tr>
                            <td>
                              <div style={{ height: '10px', lineHeight: '10px', fontSize: '10px' }}>&nbsp;</div>
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
