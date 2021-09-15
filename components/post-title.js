export default function PostTitle({ children }) {
  return (
    <h1
      style={{ color: "#000", letterSpacing: "1px", fontFamily: "Aleo, Helvetica, Arial, sans-serif", fontSize: "30px", textAlign: "center", fontWeight: "700" }}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
