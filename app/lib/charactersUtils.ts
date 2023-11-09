export function publisherIMG(publisher: string) {
    switch (publisher) {
        case "Marvel Comics":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png";

        case "DC Comics":
            // return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png";

        case "Shueisha":
            return "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png";

        case "George Lucas":
            return "https://media.comicbook.com/wp-content/uploads/2012/06/120411064621_lucasfilm-logo-640x360-16x9.jpg";

        case "Warner Bros":
            // return "https://variety.com/wp-content/uploads/2022/04/IMG_3724.jpg"
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png";

        case "Dark Horse Comics":
            return "https://d2lzb5v10mb0lj.cloudfront.net/dhc/common/dh_direct.png";

        case "Image Comics":
            return "https://seeklogo.com/images/I/image-comics-logo-16D25B0126-seeklogo.com.png";

        case "IDW Publishing":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg/800px-Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg.png";

        case "Microsoft":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png";
        /**
         * "Angel"
         * "NBC - Heroes"
         * Tempest
         * SyFy
         * ABC Studios
         * Icon Comics
         * Universal Studios
         * Gemini V
         * null
         * Star Trek
         * Goliath
         * Deadpool
         * Wildstorm
         * South Park
         * Sony Pictures
         * Vindicator II
         * Titan Books
         * J. K. Rowling
         * Microsoft
         * She-Thing
         * Rebellion
         *
         */

        default:
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU";
    }
}