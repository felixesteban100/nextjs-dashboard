export const CHARACTERS_PER_PAGE = 4;

export const ALLRACES = [
  { value: "All", name: "All races" },
  { value: "Human", name: "Human 🌎" },
  { value: "Metahuman", name: "Metahuman 🧬" },
  { value: "Alien", name: "Alien 👽" },
  { value: "Kryptonian", name: "Kryptonian 👽" },
  { value: "Symbiote", name: "Symbiote 👽" },
  { value: "Mutant", name: "Mutant 🧬" },
  { value: "Atlantean", name: "Atlantean 🐟" },
  { value: "Demon", name: "Demon 😈" },
  { value: "Android", name: "Android 🤖" },
  { value: "Cyborg", name: "Cyborg 🤖" },
  { value: "Animal", name: "Animal 🥦" },
  { value: "Zombie", name: "Zombie 🧟‍♂️🧟‍♀️" },
  { value: "Amazon", name: "Amazon 🥦" },
  { value: "Eternal", name: "Eternal 👽" },
  { value: "Inhuman", name: "Inhuman 🧬" },
  { value: "Asgardian", name: "Asgardian 👽" },
  { value: "Cosmic Entity", name: "Cosmic Entity 🌌" },
];

export const ALLALIGMENTS = [
  {
    value: "All",
    name: "All aligments",
  },
  {
    value: "good",
    name: "Hero 😃",
  },
  {
    value: "bad",
    name: "Villain 😡",
  },
  {
    value: "neutral",
    name: "Anti-hero 😐",
  },
];

export const ALLGENDERS = [
  {
    value: "both",
    name: "Both genders",
  },
  {
    value: "Female",
    name: "Female 🚺",
  },
  {
    value: "Male",
    name: "Male 🚹",
  },
];

export const ALLUNIVERSE = [
  { value: "All", name: "All universes" },
  { value: "Marvel Comics", name: "Marvel" },
  { value: "DC Comics", name: "DC" },
  { value: "Shueisha", name: "Shueisha" },
  { value: "Dark Horse Comics", name: "Dark Horse Comics" },
  { value: "George Lucas", name: "George Lucas" },
  { value: "IDW Publishing", name: "IDW Publishing" },
  { value: "Image Comics", name: "Image Comics" },
  { value: "Warner Bros", name: "Warner Bros" },
  // { value: "Angel", name: "Angel" },
  { value: "NBC - Heroes", name: "NBC - Heroes" },
  { value: "Tempest", name: "Tempest" },
  { value: "SyFy", name: "SyFy" },
  { value: "ABC Studios", name: "ABC Studios" },
  { value: "Icon Comics", name: "Icon Comics" },
  { value: "Universal Studios", name: "Universal Studios" },
  { value: "Gemini V", name: "Gemini V" },
  { value: "Star Trek", name: "Star Trek" },
  // { value: "Goliath", name: "Goliath" },
  // { value: "Deadpool", name: "Deadpool" },
  { value: "Wildstorm", name: "Wildstorm" },
  { value: "South Park", name: "South Park" },
  { value: "Sony Pictures", name: "Sony Pictures" },
  { value: "Vindicator II", name: "Vindicator II" },
  { value: "Image Comics", name: "Image Comics" },
  { value: "Titan Books", name: "Titan Books" },
  { value: "J. K. Rowling", name: "J. K. Rowling" },
  { value: "Microsoft", name: "Microsoft" },
  // { value: "She-Thing", name: "She-Thing" },
  { value: "Rebellion", name: "Rebellion" },
  { value: "J. R. R. Tolkien", name: "J. R. R. Tolkien" },
  { value: "Carolco Pictures", name: "Carolco Pictures" },
  { value: "ARK corporation", name: "ARK corporation" },
  { value: "Paramount Pictures", name: "Paramount Pictures" },
  { value: "-", name: "-" },
  // { value: null, name: "null" },
  { value: "Real people", name: "Real people" },

  //
];

export function getTeamByUniverse(universe: string): {name: string, value: string, img: string}[] {
  switch (universe) {
    case "Marvel Comics":
      return [
        {
          name: "Asgardians",
          value: "Asgardians",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deqsmlv-740da833-0582-4672-9c63-a58f1f79565c.png/v1/fill/w_638,h_604/asgard_logo_by_spiderbyte64_deqsmlv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA0IiwicGF0aCI6IlwvZlwvYTIxYzI4MTYtNDlkNC00YTViLWI2ZGItNzYzNGE1ZWE4NjcxXC9kZXFzbWx2LTc0MGRhODMzLTA1ODItNDY3Mi05YzYzLWE1OGYxZjc5NTY1Yy5wbmciLCJ3aWR0aCI6Ijw9NjM4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R5bMAGrtXXim7EM_A84hkucgZewYCUOzB8_Uevmkwlc",
        },
        {
          name: "Avengers",
          value: "Avengers",
          img: "https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2015.png",
        },
        {
          name: "Avengers-Original",
          value: "Avengers-Original",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dd5vtke-4242c01a-acb6-49d6-8952-5f78313b7da0.png/v1/fill/w_1280,h_603/avengers__2019_logo__by_alanmac95_dd5vtke-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvNjI3ZmU3MjEtODQ2Zi00Zjc1LWFjNjEtMTExY2EwMGIyN2RkXC9kZDV2dGtlLTQyNDJjMDFhLWFjYjYtNDlkNi04OTUyLTVmNzgzMTNiN2RhMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D_rCPgMAzwI7axRhtrx9tzc24PXQR0lRzU637xqkkoA",
        },
        {
          name: "Black Order",
          value: "Black Order",
          img: "https://cdnb.artstation.com/p/assets/images/images/038/379/307/large/nicholas-russell-theblackorder-logo.jpg?1622926914",
        },
        {
          name: "Brotherhood of Evil Mutants",
          value: "Brotherhood of Evil Mutants",
          img: "https://i.pinimg.com/564x/1a/65/39/1a6539168939ad87492441851f5f6160.jpg",
        },
        {
          name: "Dark avengers",
          value: "Dark avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deezys0-ad61e4e7-f0b7-458c-a304-ce6a82883302.png/v1/fill/w_1181,h_591/dark_avengers_logo_by_lyriumrogue_deezys0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkxIiwicGF0aCI6IlwvZlwvMDJiNjBlZWQtZDljOC00YjhlLWI4MjYtM2VkMDY5NGJjZjI2XC9kZWV6eXMwLWFkNjFlNGU3LWYwYjctNDU4Yy1hMzA0LWNlNmE4Mjg4MzMwMi5wbmciLCJ3aWR0aCI6Ijw9MTE4MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WGNpBaikwouoeHzsLf0ywqFGVrJKaErqEjuquOdU-14",
        },
        {
          name: "Defenders",
          value: "Defenders",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6nq2rp-d52122fd-909a-4eaa-963e-3268cc5595a8.png/v1/fill/w_1024,h_442,q_80,strp/marvel_s_the_defenders___logo_by_mrsteiners_d6nq2rp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQyIiwicGF0aCI6IlwvZlwvYzU2NmIzNjAtZGNjMC00ZjhkLTgxNTQtMDVlODEyM2QwZDM2XC9kNm5xMnJwLWQ1MjEyMmZkLTkwOWEtNGVhYS05NjNlLTMyNjhjYzU1OTVhOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MFsU6vsmf_xeeiPuf_qwGy6HrYqunWGwqxJEs6JJql8",
        },
        {
          name: "Fantastic Four",
          value: "Fantastic Four",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82d0ec62-144a-47ae-aebb-f112f2a3b50b/ddghfpv-954536f0-f6f2-45c9-9f3a-468e21363b42.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyZDBlYzYyLTE0NGEtNDdhZS1hZWJiLWYxMTJmMmEzYjUwYlwvZGRnaGZwdi05NTQ1MzZmMC1mNmYyLTQ1YzktOWYzYS00NjhlMjEzNjNiNDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cfqvk-n8nviTwKKScn8a-iJ-Qx1sR_fa9DWOKXx9TBA",
        },
        {
          name: "Fantastic Four-Original",
          value: "Fantastic Four-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fantastic_Four_logo_%28blue_and_white%29.svg/800px-Fantastic_Four_logo_%28blue_and_white%29.svg.png",
        },
        {
          name: "Future Foundation",
          value: "Future Foundation",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8qujky-26fe2e98-50ca-4bf2-8bbd-eb2ff034ae7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0OTk4NzFkLWI2OTMtNDVmNi1hZTkwLWY5NDUxZmZmMDBkYVwvZDhxdWpreS0yNmZlMmU5OC01MGNhLTRiZjItOGJiZC1lYjJmZjAzNGFlN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fe-uzIK474LCq2QnBzXM7ge6m-TfBFonIv5WIJ-3_rc",
        },
        {
          name: "Guardians of the Galaxy",
          value: "Guardians of the Galaxy",
          img: "https://static.wikia.nocookie.net/logopedia/images/2/2d/GOTG_merch_logo.png/revision/latest/scale-to-width-down/1200?cb=20190430131028",
        },
        {
          name: "Heroes For Hire",
          value: "Heroes For Hire",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b6361af-d2ac-439d-a6fe-b3d69bba2a56/ddvf1p0-bfe256b5-cdf6-4e9d-8536-30ed5f48850b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNjM2MWFmLWQyYWMtNDM5ZC1hNmZlLWIzZDY5YmJhMmE1NlwvZGR2ZjFwMC1iZmUyNTZiNS1jZGY2LTRlOWQtODUzNi0zMGVkNWY0ODg1MGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lYyHlhENqrsoZEvfkvp5dJ5I0srj6Exb6dKUD6HmlnI",
        },
        {
          name: "Hulk Family",
          value: "Hulk Family",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Hulk-Logo.png",
        },
        {
          name: "Hydra",
          value: "Hydra",
          img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Hydra_symbol.png",
        },

        {
          name: "Illuminati",
          value: "Illuminati",
          img: "https://i.ytimg.com/vi/kMzBLe2X-aE/maxresdefault.jpg",
        },
        {
          name: "Inhumans",
          value: "Inhumans",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fd7346-eed0-4416-8203-58b0d230afe3/dfejcpg-e927c215-be44-4640-8c81-a88090ef5163.png/v1/fill/w_1280,h_578/inhumans_logo_png___disney__variant_by_bats66_dfejcpg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc4IiwicGF0aCI6IlwvZlwvZTVmZDczNDYtZWVkMC00NDE2LTgyMDMtNThiMGQyMzBhZmUzXC9kZmVqY3BnLWU5MjdjMjE1LWJlNDQtNDY0MC04YzgxLWE4ODA5MGVmNTE2My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dlImHRVc7dcYDiwRhYU5rff0xaUDBwpfIXMXVtfrgmY",
        },
        {
          name: "Legion of Monsters",
          value: "Legion of Monsters",
          img: "https://i.pinimg.com/564x/6e/a7/f5/6ea7f5127b20f058a2fba019e2008115.jpg",
        },
        {
          name: "Marvel Knights",
          value: "Marvel Knights",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0104ec68-4823-457b-9ac4-ca10b5317304/ddfbsxi-09e76b3c-43a5-42d2-9bdd-0d9d86095f1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDRlYzY4LTQ4MjMtNDU3Yi05YWM0LWNhMTBiNTMxNzMwNFwvZGRmYnN4aS0wOWU3NmIzYy00M2E1LTQyZDItOWJkZC0wZDlkODYwOTVmMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tNvdl7_yq-ZSLqWweeXSFIUFvi6IUpPwVCnPqI5SDu4",
        },
        {
          name: "Midnight Sons",
          value: "Midnight Sons",
          img: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1723/0gPKGnGXftV59bXu6NgH9wXA.png",
        },
        {
          name: "MCU Villains",
          value: "MCU Villains",
          //https://tiermaker.com/images/avatars-2022/Ostrazo/Ostrazo.jpg?1665249362
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07dc11de-dc89-436a-89e0-8ddc2bf29af2/deurkec-115a9ad5-ab77-41eb-bb60-507c8144a89d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZGMxMWRlLWRjODktNDM2YS04OWUwLThkZGMyYmYyOWFmMlwvZGV1cmtlYy0xMTVhOWFkNS1hYjc3LTQxZWItYmI2MC01MDdjODE0NGE4OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tjqC1rZ_YsIckE9pRKb8_htMIf9PRvSnq1-WV4HORLk",
        },
        {
          name: "New Mutants",
          value: "New Mutants",
          img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082020/the_new_mutants_1st_logo.jpg?mjl.sY8ZuhzkwNEcKRiDwYSYeLCVjDKg&itok=XB7yoDKc",
        },
        {
          name: "New Warriors",
          value: "New Warriors",
          img: "https://i.pinimg.com/originals/ce/19/0a/ce190a4b163fb70300e2b92ead1f9980.png",
        },
        {
          name: "Secret Avengers",
          value: "Secret Avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df9w9rh-9dd43bc1-9b36-4034-9bb6-8a1c7e4078d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGY5dzlyaC05ZGQ0M2JjMS05YjM2LTQwMzQtOWJiNi04YTFjN2U0MDc4ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xTMfNwvub190r_OcyRUWkVDY-1ODA0yVHDj3ztaamAI",
        },
        {
          name: "S.H.I.E.L.D",
          value: "S.H.I.E.L.D",
          img: "https://seeklogo.com/images/M/marvel-agents-of-shield-icon-logo-54CED6908B-seeklogo.com.png",
        },
        {
          name: "Sinister Six",
          value: "Sinister Six",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deuucix-26734fb7-e2d7-4f87-8a43-08db5a598984.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMWMyODE2LTQ5ZDQtNGE1Yi1iNmRiLTc2MzRhNWVhODY3MVwvZGV1dWNpeC0yNjczNGZiNy1lMmQ3LTRmODctOGE0My0wOGRiNWE1OTg5ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IZ7FEozXuyy4NOOqmj9ARb9Xh0k3eVDwMGBamAkOwWo",
        },
        {
          name: "Spider-Army",
          value: "Spider-Army",
          img: "https://cdn.mos.cms.futurecdn.net/GNdXbxaRQP4aGLwxc53zZ9.jpg",
        },
        {
          name: "Symbiotes",
          value: "Symbiotes",
          img: "https://e7.pngegg.com/pngimages/747/62/png-clipart-venom-illustration-spider-man-venom-wall-decal-sticker-venom-face-s-text-superhero.png",
        },
        {
          name: "Thunderbolts",
          value: "Thunderbolts",
          img: "https://reelfreak.files.wordpress.com/2014/02/fotoflexer_photo.jpg",
        },
        {
          name: "Ultimates",
          value: "Ultimates",
          img: "https://i0.wp.com/guiasdelectura.com/wp-content/uploads/2018/04/Ultimates_Vol_1_1.jpg?fit=1000%2C251&ssl=1",
        },
        {
          name: "Weapon X",
          value: "Weapon X",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10795fa2-3dbe-470b-93ce-dada2e3e954e/dag852-48ba374e-4007-49ce-bc5a-5f843ccb960c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwNzk1ZmEyLTNkYmUtNDcwYi05M2NlLWRhZGEyZTNlOTU0ZVwvZGFnODUyLTQ4YmEzNzRlLTQwMDctNDljZS1iYzVhLTVmODQzY2NiOTYwYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.a-SwCvcA6JX9o8-CntlDCbl2OnNxnTjDi2tcbJyr0AQ",
        },
        {
          name: "X-Force",
          value: "X-Force",
          img: "https://i.pinimg.com/originals/fd/d0/5e/fdd05ee150633abd43ed5ba6ca46dfe7.png",
        },
        {
          name: "X-Men",
          value: "X-Men",
          // img: 'https://assets.stickpng.com/images/6160517776000b00045a7d7e.png'
          // img: "https://cdn.mos.cms.futurecdn.net/ZmMkFCTgBNMoxEohbzBXJm.jpg",
          img: "https://seeklogo.com/images/X/x-men-logo-F16A0D1D4D-seeklogo.com.png",
        },
        {
          name: "X-Men-Original",
          value: "X-Men-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/X_symbol_from_X-Men_logo.svg/240px-X_symbol_from_X-Men_logo.svg.png",
        },
        {
          name: "Young avengers",
          value: "Young avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f835025f-aa9a-4a6f-bf26-b084438b2053/dfa4dao-424bffc3-fca8-4342-a9f2-cb2eae86efff.jpg/v1/fill/w_1342,h_595,q_70,strp/marvel_studios__young_avengers__logo_png__by_thescarletwitch1989_dfa4dao-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvZjgzNTAyNWYtYWE5YS00YTZmLWJmMjYtYjA4NDQzOGIyMDUzXC9kZmE0ZGFvLTQyNGJmZmMzLWZjYTgtNDM0Mi1hOWYyLWNiMmVhZTg2ZWZmZi5qcGciLCJ3aWR0aCI6Ijw9MTYzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JtuXXo7s7xs_xJYyI5xTBDymrR3JxXC9vf90NZcB_HY",
        },
      ];

    case "DC Comics":
      return [
        {
          name: "Aquaman Family",
          value: "Aquaman Family",
          img: "https://sportshub.cbsistatic.com/i/2021/11/08/e2a46e72-9d65-4583-b8d8-14e1563b1e8a/aquamen-dc-logo.jpg",
        },
        {
          name: "Assorted Batman rogues",
          value: "Assorted Batman rogues",
          img: "https://w0.peakpx.com/wallpaper/555/276/HD-wallpaper-batman-villains-joker-comics-scarecrow-peguin-superheroes-catwoman-two-face-dc-comics-batman-villains-poison-ivy.jpg",
        },
        {
          name: "Batman Family",
          value: "Batman Family",
          img: "https://1.bp.blogspot.com/--SVWM1KMnVg/Xw91Rg-CF5I/AAAAAAAAmYk/31fWiKwl520MlvOY5q3deIke4dibyB8UACLcBGAsYHQ/s1600/228-2288332_gotham-knights-logo-png-transparent-batman-gotham-knights.png",
        },
        {
          name: "Crimebusters / Watchmen",
          value: "Crimebusters",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/300b1a15-9250-4271-b852-3d8701ff1dbd/d1vzmvq-a0f12489-90d0-43e8-a1d9-4a94801fbca1.png/v1/fill/w_1280,h_960,q_80,strp/watchmen_logo_by_marsu85_d1vzmvq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzAwYjFhMTUtOTI1MC00MjcxLWI4NTItM2Q4NzAxZmYxZGJkXC9kMXZ6bXZxLWEwZjEyNDg5LTkwZDAtNDNlOC1hMWQ5LTRhOTQ4MDFmYmNhMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kh8vx0-H6mAi5DCDHPqNN_QosDLpU9wfrLLUy2OcYZ0",
        },
        {
          name: "Crime Syndicate",
          value: "Crime Syndicate",
          img: "https://www.dafont.com/img/illustration/c/r/crime_syndicate.png",
        },
        {
          name: "Flash Family / Speedsters",
          value: "Flash Family",
          img: "https://i.pinimg.com/736x/b4/1c/f7/b41cf7951ae77dcf210eaa20e4b0172b--logos-flash.jpg",
        },
        {
          name: "Green Lantern Corps",
          value: "Green Lantern Corps",
          img: "https://static.miraheze.org/iconswiki/9/94/Green_Lantern_Corps_vol3_Logo.png",
        },
        {
          name: "Injustice League",
          value: "Injustice League",
          img: "https://d36m266ykvepgv.cloudfront.net/uploads/media/wI2fTCuIZN/c-160-160/logo-02-1.jpg",
        },
        {
          name: "Justice League",
          value: "Justice League",
          img: "https://heroichollywood.com/wp-content/uploads/2017/09/justice-league-logo-square-4.jpg",
        },
        {
          name: "Justice League-Original",
          value: "Justice League-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Justice_League_2017_film_logo.svg/2395px-Justice_League_2017_film_logo.svg.png",
        },
        {
          name: "Justice League Dark",
          value: "Justice League Dark",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deu14vf-dd6f5d44-ab34-409d-82ab-7959393b86ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYjYwZWVkLWQ5YzgtNGI4ZS1iODI2LTNlZDA2OTRiY2YyNlwvZGV1MTR2Zi1kZDZmNWQ0NC1hYjM0LTQwOWQtODJhYi03OTU5MzkzYjg2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wMa5cMF9wHLY8Rey0Tv41tBx1vOy3qxYteTLwfVKrck",
        },
        {
          name: "Justice Society of America",
          value: "Justice Society of America",
          img: "https://i.pinimg.com/736x/a4/cd/ca/a4cdca2411e40a0ecdfe475b2e599871.jpg",
        },
        {
          name: "Lanterns Corps (All)",
          value: "Lantern Corps",
          img: "https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq",
        },
        {
          name: "The Terrifics",
          value: "The Terrifics",
          img: "https://www.pngitem.com/pimgs/m/376-3763618_dc-the-terrifics-15-hd-png-download.png",
        },
        {
          name: "Legion of Super-Heroes",
          value: "Legion of Super-Heroes",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/765582ae-ee02-4dc4-851a-d3dc540cdf79/d417t7r-06f21f67-aab4-415e-9842-20a64c0dc1b6.png/v1/fill/w_256,h_256/legion_of_superheroes_icon_by_jeremymallin_d417t7r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNzY1NTgyYWUtZWUwMi00ZGM0LTg1MWEtZDNkYzU0MGNkZjc5XC9kNDE3dDdyLTA2ZjIxZjY3LWFhYjQtNDE1ZS05ODQyLTIwYTY0YzBkYzFiNi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mwQtccx3Qrs1UmpTUsd8nN-mNNgfpvytgCZmwO6f808",
        },
        {
          name: "Marvel Family",
          value: "Marvel Family",
          img: "https://i.pinimg.com/originals/b8/94/20/b89420afa43affd9f5cd97900fc89806.png",
        },
        {
          name: "New Guardians Corps",
          value: "New Guardians",
          img: "https://i.pinimg.com/originals/05/58/a9/0558a9596e80cb6931b4bb6d1c876664.png",
        },
        {
          name: "Outsiders",
          value: "Outsiders",
          img: "https://1.bp.blogspot.com/-xg4MjNnNrH0/Tb50RigNa8I/AAAAAAAAA5w/lfQQBWtBVSs/s1600/outsiders.png",
        },
        {
          name: "Secret Society of Super Villains",
          value: "Secret Society of Super Villains",
          img: "https://www.logolynx.com/images/logolynx/64/64f427a6fa6c1acd1ddbb4be2b5eac96.jpeg",
        },
        {
          name: "Suicide Squad",
          value: "Suicide Squad",
          img: "https://www.denofgeek.com/wp-content/uploads/2020/08/The-Suicide-Squad-Logo.png?fit=1200%2C715",
        },
        {
          name: "Superman Family / Kriptonian",
          value: "Superman Family",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png",
        },
        {
          name: "Teen Titans",
          value: "Teen Titans",
          img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8bdcbc70089491.5b97ce31f3e7b.png",
        },
      ];

    case "Dark Horse Comics":
      return [
        {
          name: "Incredible Family",
          value: "Incredible Family",
          img: "https://logos-world.net/wp-content/uploads/2021/09/Incredibles-Logo.png",
        },
      ];

    case "IDW Publishing":
      return [
        {
          name: "Teenage Mutant Ninja Turtles",
          value: "Teenage Mutant Ninja Turtles",
          img: "https://logos-world.net/wp-content/uploads/2023/04/Ninja-Turtles-Logo-2003.png",
        },
      ];

    case "Shueisha":
      return [
        {
          name: "One Piece",
          value: "One Piece",
          img: "https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png",
        },
        {
          name: "Black Clover",
          value: "Black Clover",
          img: "https://guiltybit.com/wp-content/uploads/2022/02/Manga-Black-Clover.webp",
        },
        {
          name: "Dragon Ball",
          value: "Dragon Ball",
          img: "https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png",
        },
        {
          name: "Demon Slayer",
          value: "Demon Slayer",
          img: "https://logos-world.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png",
        },
        {
          name: "Jujutsu Kaisen",
          value: "Jujutsu Kaisen",
          img: "https://johto.legiaodosherois.com.br/wp-content/uploads/2021/10/legiao_IC7yo83cx4YV.jpg",
        },
        {
          name: "Bleach",
          value: "Bleach",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bleach_logo_anime.jpg",
        },
        {
          name: "Attack on Titan",
          value: "Attack on Titan",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png",
        },
        {
          name: "Naruto Shippuden",
          value: "Naruto Shippuden",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/667787d5-f7b0-4eb6-97ee-76f03852fa83/d1sz44l-d35ebbe3-df1f-4043-9be6-5ed49301c01f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2Nzc4N2Q1LWY3YjAtNGViNi05N2VlLTc2ZjAzODUyZmE4M1wvZDFzejQ0bC1kMzVlYmJlMy1kZjFmLTQwNDMtOWJlNi01ZWQ0OTMwMWMwMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NhJ0Wzg5CuzTnrO-Khw1NrpOdO9JTFJzswd4AWNQSWw",
        },
        {
          name: "One Punch Man",
          value: "One Punch Man",
          img: "https://i.pinimg.com/564x/6d/b2/02/6db2024de8be20d87662727e6556cb07.jpg",
        },
        {
          name: "Chainsaw Man",
          value: "Chainsaw Man",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chainsaw_Man_logo.png/1200px-Chainsaw_Man_logo.png",
        },
        {
          name: "Metal Alchemist",
          value: "Metal Alchemist",
          img: "https://m.media-amazon.com/images/I/71p7ercPcHL.jpg",
        },
      ];

    case "Warner Bros":
      return [
        {
          name: "Ben 10",
          value: "Ben 10",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b700c630-9435-4853-b567-d025115b827b/degakzn-576504c0-f8f6-40f0-b130-3a19544a0e9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3MDBjNjMwLTk0MzUtNDg1My1iNTY3LWQwMjUxMTViODI3YlwvZGVnYWt6bi01NzY1MDRjMC1mOGY2LTQwZjAtYjEzMC0zYTE5NTQ0YTBlOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yPaYT4GYrakHIDBEXastMExHC4xVn4_kUFmgvd5J7sA",
        },
        {
          name: "Supernatural",
          value: "Supernatural",
          img: "https://supernaturalmerch.store/wp-content/uploads/2020/10/Supernatural-Store-logo-1-1.png",
        },
      ];

    default:
      return [];
  }
}

// const arrayOptions = ["name", "id", "_id", "powerstats.power", "powerstats.intelligence", "powerstats.strength", "powerstats.durability", "powerstats.combat", "powerstats.speed"]
// export const linkToCharactersPage = `/dashboard/characters?pageCharacters=${Math.floor(Math.random() * 179) + 1}&characterOrFullName=false&side=All&universe=All&sortBy=${arrayOptions[Math.floor(Math.random() * arrayOptions.length)]}&sortDirection=desc&team=All`
// export const linkToCharactersPage = `/dashboard/characters?pageCharacters=${Math.floor(Math.random() * 179) + 1}&characterOrFullName=false&side=All&universe=All&sortBy=_id&sortDirection=desc&team=All`
// export const linkToCharactersPage = `/dashboard/characters?pageCharacters=1&characterOrFullName=false&side=All&universe=All&sortBy=_id&sortDirection=desc&team=All`
export const linkToCharactersPage = `/dashboard/characters`