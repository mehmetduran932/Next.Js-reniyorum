import Link from "next/link";
function Navi() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
        <Link href="/about">
          <a>Hakkımda</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navi;
