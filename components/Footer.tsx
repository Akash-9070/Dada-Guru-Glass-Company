export default function Footer() {
  return (
    <footer className="bg-[#3E362E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-[#AC8968] text-xl md:text-2xl font-bold">Dada Guru Glass Company</h3>
            <p className="text-sm md:text-base">Transforming spaces with innovative glass and aluminum solutions.</p>
            <p className="text-sm">© 2023 Dada Guru Glass Company. All rights reserved.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-semibold">Contact</h4>
            <p className="text-sm md:text-base">117 k5c scheme near lal mandir</p>
            <p className="text-sm md:text-base">katipura jhotwada, jaipur</p>
            <p className="text-sm md:text-base">Phone: +91-9460191579</p>
            <p className="text-sm md:text-base">Email: dggc1579@gmail.com</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-semibold">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-[#865D36] transition duration-300">Facebook</a>
              <a href="https://www.instagram.com/raj.sun9040?igsh=ZnkybDlnb2Iwd3Bm" className="hover:text-[#865D36] transition duration-300">Instagram</a>
              <a href="#" className="hover:text-[#865D36] transition duration-300">Twitter</a>
              <a href="#" className="hover:text-[#865D36] transition duration-300">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}