export default function Secondtab() {
  return (
    <div className="max-w-7xl flex xl:flex-col xl:gap-20 mt-40 rounded-2xl mb-20">
      <div className="text-lg pr-40 sm:pr-0">
        <p>
          Vestibulum fermentum tortor id mi. Phasellus rhoncus. Fusce tellus
          odio, dapibus id fermentum quis, suscipit id erat. Sed ut perspiciatis
          unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Aliquam in lorem sit amet leo accumsan lacinia.
          <br />
          <br />
          Aliquam erat volutpat. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. Fusce dui leo, imperdiet
          in, aliquam sit amet, feugiat eu, orci.
        </p>
      </div>
      <div className="relative">
        <div className="w-96 h-64 bg-gradient-to-r from-gradstart to-gradend rounded-2xl absolute -z-50 top-10 right-10 sm:top-5 sm:right-px"></div>
        <iframe
          className="w-96 h-64 sm:max-w-xl"
          src="https://www.youtube.com/embed/_cAB-dHeTME?si=6UEt-PCMfPu1T9aA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
