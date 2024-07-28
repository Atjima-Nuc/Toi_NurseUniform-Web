export default function Map() {
  return (
    <div className="flex h-[32rem] p-8 md:ml-auto w-full mt-10 md:mt-0 justify-evenly">
      <div className=" bg-white ">
        <h1 className="text-gray-900 text-4xl mb-1 font-bold title-font">
          Contact Us
        </h1>
        <p className="leading-relaxed mt-5 text-gray-600 text-lg">
          Address : 18 Soi Ladplakhao 1 Ladprao Ladprao Bangkok 10230 <br />
          Phone no. : 081-835-0179
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.5267941073082!2d100.5905650391681!3d13.832602357536635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d0e7b0f6e95%3A0xbd602ab53c06b6f6!2z4LiL4Lit4LiiIOC4peC4suC4lOC4m-C4peC4suC5gOC4hOC5ieC4siAxIOC5geC4guC4p-C4h-C4peC4suC4lOC4nuC4o-C5ieC4suC4pyDguYDguILguJXguKXguLLguJTguJ7guKPguYnguLLguKcg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwMjMw!5e0!3m2!1sth!2sth!4v1718470851898!5m2!1sth!2sth"
        className="w-1/2 h-full"
      ></iframe>
    </div>
  );
}
