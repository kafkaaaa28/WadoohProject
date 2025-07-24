import react from "react"
import tentang from '../Img/Gemini_Generated_Image_ly38r5ly38r5ly38.png'
import tentang2 from '../Img/Gemini_Generated_Image_ly38r5ly38r5ly3JD.png'
const About = () => {
    return (
<div className=" lg:-translate-y-[650px] lg:translate-x-[450px]">
    <div className="flex gap-2 justify-evenly  mr-[480px]">
    <div className="bg-gray-200 shadow-lg w-[250px] rounded-lg">
    <img src={tentang} className="h-[250px] w-[250px] rounded-lg" />
    </div>
    <div className=" w-[350px] flex items-center text-center">
<p className="font-bold">Kami hadir untuk menyediakan layanan konsultasi pertanian berbasis data. Melalui sistem ini, pengguna dapat memperoleh rekomendasi tanaman, pupuk, dan waktu tanam terbaik berdasarkan informasi lokasi, jenis tanah, cuaca, dan musim.</p>
        </div>
    </div>
     <div className="flex gap-2 justify-evenly  mr-[480px]">
    <div className=" w-[350px] flex items-center text-center">
<p className="font-bold">Kami juga  dilengkapi dengan fitur peta interaktif, simulasi panen, serta artikel edukatif tentang pertanian dan kesehatan petani. Semua fitur dirancang untuk membantu petani dan masyarakat umum memahami pertanian secara lebih modern, cepat, dan mudah.</p>
        </div>
    <div className="bg-gray-200 shadow-lg w-[250px] rounded-lg">
    <img src={tentang2} className="h-[250px] w-[250px] rounded-lg" />
    </div>
    </div>
</div>
    )
}

export default About