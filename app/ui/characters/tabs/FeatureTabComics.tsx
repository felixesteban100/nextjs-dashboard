import { Character } from "@/app/lib/definitions"
import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"

type FeatureTabComicsProps = {
    selectedCharacter: Character
}

function FeatureTabComics({ selectedCharacter }: FeatureTabComicsProps) {
    const allImagesInfo: { property: string, img: string }[] = [
        { property: 'md', img: selectedCharacter.images.md },
        ...Object.entries(selectedCharacter.images).reduce((acc, currentValue) => {
            if(currentValue[0] !== "md" && currentValue[1] !== "-" && currentValue[1] !== "" && !currentValue[1].includes('/api/images/xs/')){
                acc.push({
                    property: currentValue[0],
                    value: currentValue[1]
                })
            }
            return acc
        }, new Array())
    ]

    const allImages: string[] = [
        selectedCharacter.images.md,
        ...Object.entries(selectedCharacter.images).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    ]

    const images = Object.entries(organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher).slice().sort(() => Math.random() - 0.5)).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])

    return (
        <FeatureTabContainer
            valueTab="Comics"
            extraClassNames="h-[50vh] md:h-[70vh] border-2 overflow-scroll"
        >
            <StatContainer>
                <ScrollArea className="w-56 md:w-96 whitespace-nowrap rounded-md  mx-auto mb-5">
                    <div className="flex w-max space-x-4 p-4 md:h-[450px]">
                        {allImagesInfo.map((imgInfo, index) => (
                            <figure key={index} className="shrink-0 w-[150px] md:w-max">
                                <Link href={`/dashboard/characters/${selectedCharacter.id}?image=${imgInfo.property}`} className="overflow-hidden rounded-md h-[90%] w-full">
                                    <Image
                                        src={allImages[index]}
                                        alt={`Photo by ${selectedCharacter.name}-${index}`}
                                        className="aspect-[3/4] h-full w-fit object-cover"
                                        width={300}
                                        height={400}
                                    />
                                </Link>
                                {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                                    Photo by{" "}
                                    <span className="font-semibold text-foreground">
                                        {selectedCharacter.name}
                                    </span>
                                </figcaption> */}
                            </figure>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <div className='md:w-[50%] flex justify-center mx-auto'>
                    <div className="h-full w-full flex flex-col justify-center items-center gap-5">
                        {images.map((comic, index) => {
                            return (
                                <Image
                                    key={`comic-${index}`}
                                    className="h-auto w-full"
                                    src={comic}
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                    alt={`comic-${index}`}
                                />
                            )
                        })}
                    </div>
                </div>
            </StatContainer>
        </FeatureTabContainer>
    )
}


export function organizedComicsProperty(
    comics: string[] | null | undefined,
    publisher: string
): string[] {
    if (comics === undefined || comics === null) {
        switch (publisher) {
            case "Marvel Comics":
                return [
                    "https://i.annihil.us/u/prod/marvel/i/mg/5/04/5d5d4cbf869ff/clean.jpg",
                    "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/f/70/5d5aaf2e85d4d/clean.jpg",
                    "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                    // "https://images.saymedia-content.com/.image/t_share/MTc0MzA1MTk3OTc4Mjk4MjM2/getting-into-comics-a-general-guide.jpg",
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/f/90/64ecae4a89ba7/clean.jpg",
                    "https://2.bp.blogspot.com/VgE-mzd8ctoEG3S--deLN57u5tZ4tT2fCIixOS8qiGoK83Nyi9TQpF_tQIM6K7ohGRF0TpQREeQ-=s0?rhlupa=MjcuNjcuMTQyLjI0Nw&rnvuka=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDUuMC4yOyBBU1VTX1owMExEIEJ1aWxkL0xSWDIyRykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzYwLjAuMzExMi4xMTYgTW9iaWxlIFNhZmFyaS81MzcuMzY=",
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/5863dd6a70a67/clean.jpg",
                    "https://media.comicbook.com/uploads1/2014/11/super-villain-team-up-14-cover-113584.jpg",
                ];

            case "DC Comics":
                return [
                    "http://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Justice_League_of_America_poster_Issue_1.jpg",
                    "https://cdn.europosters.eu/image/1300/julisteet/dc-comics-collage-i15088.jpg",
                    "https://d.newsweek.com/en/full/975273/heroes-crisis-tom-king-clay-mann-dc-comics.jpg",
                    "https://i.pinimg.com/originals/02/fb/e3/02fbe3db4a82b9b15c9afefe2b9799a9.png",
                    "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/05/9781608878321.jpg?fit=696%2C862&quality=80&strip=info&ssl=1",
                    "https://www.previewsworld.com/news_images/177217_889486_3.jpg",
                    "https://m.media-amazon.com/images/I/A1wC3pAqT1L._AC_UF1000,1000_QL80_.jpg",
                    "https://jafcomics.com/cdn/shop/products/83016dbf-2d9c-4240-940b-106388de85a0.jpg?v=1674396057",
                    "https://cdn11.bigcommerce.com/s-y48kcaxngv/images/stencil/1280x1280/products/6939/8340/Justice_League_34__88416.1671205006.jpg?c=1",
                ];

            case "Shueisha":
                return [
                    "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                    "https://m.media-amazon.com/images/I/81X5Wy1uMUL._AC_UF1000,1000_QL80_.jpg",
                    "https://pbs.twimg.com/media/FslBjwGWIAElbQv.jpg:large",
                    "https://pbs.twimg.com/media/DbefO60WkAA83cL?format=jpg&name=900x900",
                ];

            case "IDW Publishing":
                return [
                    "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1643902801105-VUT092WGQWT7VUD66Y8M/Teenage+Mutant+Ninja+Turtles+Reborn+Vol.+1.jpg?format=1000w",
                    "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2066186.jpg",
                    "https://static.dc.com/dc/files/default_images/BMTMNT_tp_58cb173a8b8fd6.32122101.jpg",
                    "https://m.media-amazon.com/images/I/61O+P3mEyZL.jpg",
                ];

            case "George Lucas":
                return [
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/c/00/5ff32d6aad522/clean.jpg",
                    "https://tools.toywiz.com/_images/_webp/_products/lg/apr221023.webp",
                    "https://i0.wp.com/MynockManor.com/wp-content/uploads/2020/11/Star-Wars-11-Full-Cover-Vol-2.jpeg?ssl=1",
                    "https://storage.googleapis.com/hipcomic/p/007ce152f644d7971541cb74253b82cf.jpg",
                ];

            default:
                return [
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                ];
        }
    }

    return comics;
}

export default FeatureTabComics