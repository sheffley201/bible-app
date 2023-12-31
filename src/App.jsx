import Heading from "./components/Heading";
import Dropdown from "./components/Dropdown";

function App() {
    const location = window.location.pathname;
    const locationArray = location.split("/");
    const bookLower = locationArray[1];
    const bookUpper = locationArray[1].charAt(0).toUpperCase() + locationArray[1].slice(1);
    const chapter = locationArray[2];

	return (
		<>
			<Heading />
			<div className="flex justify-center gap-x-2 mt-5">
				<Dropdown title="Choose Book..." dropID="1">
					<a href="/genesis">Genesis</a>
					<a href="/exodus">Exodus</a>
					<a href="/leviticus">Leviticus</a>
					<a href="/numbers">Numbers</a>
					<a href="/deuteronomy">Deuteronomy</a>
					<a href="/joshua">Joshua</a>
					<a href="/judges">Judges</a>
					<a href="/ruth">Ruth</a>
					<a href="/1samuel">1 Samuel</a>
					<a href="/2samuel">2 Samuel</a>
					<a href="/1kings">1 Kings</a>
					<a href="/2kings">2 Kings</a>
					<a href="/1chronicles">1 Chronicles</a>
					<a href="/2chronicles">2 Chronicles</a>
					<a href="/ezra">Ezra</a>
					<a href="/nehemiah">Nehemiah</a>
					<a href="/esther">Esther</a>
					<a href="/job">Job</a>
					<a href="/psalms">Psalms</a>
					<a href="/proverbs">Proverbs</a>
					<a href="/ecclesiastes">Ecclesiastes</a>
					<a href="/songofsolomon">Song of Solomon</a>
					<a href="/isaiah">Isaiah</a>
					<a href="/jeremiah">Jeremiah</a>
					<a href="/lamentations">Lamentations</a>
					<a href="/ezekiel">Ezekiel</a>
					<a href="/daniel">Daniel</a>
					<a href="/hosea">Hosea</a>
					<a href="/joel">Joel</a>
					<a href="/amos">Amos</a>
					<a href="/obadiah">Obadiah</a>
					<a href="/jonah">Jonah</a>
					<a href="/micah">Micah</a>
					<a href="/nahum">Nahum</a>
					<a href="/habakkuk">Habakkuk</a>
					<a href="/zephaniah">Zephaniah</a>
					<a href="/haggai">Haggai</a>
					<a href="/zechariah">Zechariah</a>
					<a href="/malachi">Malachi</a>
					<a href="/matthew">Matthew</a>
					<a href="/mark">Mark</a>
					<a href="/luke">Luke</a>
					<a href="/john">John</a>
					<a href="/acts">Acts</a>
					<a href="/romans">Romans</a>
					<a href="/1corinthians">1 Corinthians</a>
					<a href="/2corinthians">2 Corinthians</a>
					<a href="/galatians">Galatians</a>
					<a href="/ephesians">Ephesians</a>
					<a href="/philippians">Philippians</a>
					<a href="/colossians">Colossians</a>
					<a href="/1thessalonians">1 Thessalonians</a>
					<a href="/2thessalonians">2 Thessalonians</a>
					<a href="/1timothy">1 Timothy</a>
					<a href="/2timothy">2 Timothy</a>
					<a href="/titus">Titus</a>
					<a href="/philemon">Philemon</a>
					<a href="/hebrews">Hebrews</a>
					<a href="/james">James</a>
					<a href="/1peter">1 Peter</a>
					<a href="/2peter">2 Peter</a>
					<a href="/1john">1 John</a>
					<a href="/2john">2 John</a>
					<a href="/3john">3 John</a>
					<a href="/jude">Jude</a>
					<a href="/revelation">Revelation</a>
				</Dropdown>
				<Dropdown title="Choose Chapter..." dropID="2">
					<a href={"/" + bookLower + "/1"}>1</a>
                    <a href={"/" + bookLower + "/2"}>2</a>
                    <a href={"/" + bookLower + "/3"}>3</a>
                    <a href={"/" + bookLower + "/4"}>4</a>
                    <a href={"/" + bookLower + "/5"}>5</a>
                    <a href={"/" + bookLower + "/6"}>6</a>
                    <a href={"/" + bookLower + "/7"}>7</a>
                    <a href={"/" + bookLower + "/8"}>8</a>
                    <a href={"/" + bookLower + "/9"}>9</a>
                    <a href={"/" + bookLower + "/10"}>10</a>
				</Dropdown>
				<Dropdown title="Choose Version..." dropID="3">
					<a href={"/" + bookLower + "/" + chapter + "/kjv"}>KJV</a>
                    <a href={"/" + bookLower + "/" + chapter + "/esv"}>ESV</a>
                    <a href={"/" + bookLower + "/" + chapter + "/niv"}>NIV</a>
                    <a href={"/" + bookLower + "/" + chapter + "/nlt"}>NLT</a>
                    <a href={"/" + bookLower + "/" + chapter + "/nasb"}>NASB</a>
                    <a href={"/" + bookLower + "/" + chapter + "/nkjv"}>NKJV</a>
                    <a href={"/" + bookLower + "/" + chapter + "/csb"}>CSB</a>
				</Dropdown>
			</div>
            <h2 className="text-center text-3xl text-slate-900 p-2 my-3 border-b-2 border-slate-400 w-fit m-auto">{bookUpper + ' ' + chapter}</h2>
		</>
	);
}

export default App;
