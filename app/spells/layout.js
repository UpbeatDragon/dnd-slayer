import SearchBar from "./search-bar";

export default function RootLayout({ children }) {
  return (
    <div>
      <div><SearchBar/></div>
      <div>{children}</div>
    </div>
  )
}