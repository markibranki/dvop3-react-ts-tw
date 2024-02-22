import nahled from '../imgs/nahled.jpg'

export default function Tab() {
    return (
        <div className="max-w-7xl flex xl:flex-col mt-40 bg-gradient-to-r from-gradstart to-gradend rounded-2xl">
            <div className="">
                <img className='h-50 rounded-xl' src={nahled} alt="" />
            </div>
            <div className="p-20 sm:p-8">
                <p>Vestibulum fermentum tortor id mi. Phasellus rhoncus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aliquam in lorem sit amet leo accumsan lacinia.
                    <br /><br />
                    Aliquam erat volutpat. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.</p>
            </div>
        </div>
    )
}