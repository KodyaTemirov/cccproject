import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <>
      <tr>
        <td width={800} bgcolor="#ffffff">
          <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
            <tbody><tr>
              <td style={{ paddingLeft: '32px', width: '736px' }}>
                <table cellSpacing={0} cellPadding={0} border={0} align="left">
                  <tbody><tr>
                    <td style={{ borderCollapse: 'separate !important' }} width={736}>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody><tr>
                          <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: content }}
                          />
                        </tr>
                        </tbody></table>
                    </td>
                  </tr>
                  </tbody></table>
              </td>
            </tr>
              <tr>
                <td>
                  <div style={{ height: '8px', lineHeight: '8px', fontSize: '8px' }}>&nbsp;</div>
                </td>
              </tr>
            </tbody></table>
        </td>
      </tr>
    </>
  )
}
