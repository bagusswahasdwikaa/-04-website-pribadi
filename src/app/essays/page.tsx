import Link from "next/link";
export default function Essays() {
    const articles = [
        {
        id: 1,
        title: "Peran AI dalam Dunia Teknologi Informasi",
        summary: "Kecerdasan buatan kini menjadi tulang punggung inovasi di berbagai bidang IT.",
        },
        {
        id: 2,
        title: "Keamanan Siber: Tantangan dan Solusi",
        summary: "Ancaman siber terus berkembang, bagaimana cara kita menghadapinya?",
        },
        {
        id: 3,
        title: "Cloud Computing dan Transformasi Digital",
        summary: "Migrasi ke cloud menjadi strategi utama dalam transformasi digital perusahaan.",
        },
        {
        id: 4,
        title: "Masa Depan Jaringan 5G",
        summary: "Jaringan 5G membawa kecepatan tinggi dan latensi rendah untuk aplikasi masa depan.",
        },
    ];

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Artikel Teknologi Informasi</h1>
        <div className="space-y-6">
            {articles.map((article) => (
            <div
                key={article.id}
                className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg hover:scale-[1.01] transition-transform"
            >
                <div className="bg-white p-5 rounded-xl h-full">
                <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
                <p className="text-gray-600 mt-2">{article.summary}</p>
                <Link
                    href={`/essays/${article.id}`}
                    className="inline-block mt-3 text-blue-600 hover:underline font-medium"
                >
                    Selengkapnya →
                </Link>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}
