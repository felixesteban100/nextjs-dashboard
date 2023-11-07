import { Character, Revenue } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};





export function filterCharacters(allCharacters: Character[], characterName: string, howMany: number, side: string, universe: string, team: string, gender: string, race: string, includeNameOrExactName: boolean, characterOrFullName: boolean) {
    let firstFilter: Character[] = []
    const randomizedArray = allCharacters.sort(() => Math.random() - 0.5);

    // filter name
    firstFilter = filterName(firstFilter, randomizedArray, characterName, includeNameOrExactName, characterOrFullName);

    // filter how Many
    firstFilter = firstFilter.reduce((acc: Character[], current: Character) => {
        if ((howMany === 0 || howMany === null) || acc.length < howMany) {
            let isMatched = 0

            // filter attributes
            isMatched = (team === 'All' || current.connections.groupAffiliation?.toLowerCase().includes(team.toLowerCase())) ? isMatched + 1 : isMatched
            isMatched = (race === 'All' || (current.appearance.race !== null && current.appearance.race.toLowerCase().includes(race.toLowerCase()))) ? isMatched + 1 : isMatched
            isMatched = (gender === 'All' || current.appearance.gender === gender) ? isMatched + 1 : isMatched
            isMatched = (side === 'All' || current.biography.alignment === side) ? isMatched + 1 : isMatched
            isMatched = (universe === 'All' || current.biography.publisher === universe) ? isMatched + 1 : isMatched

            if (isMatched === 5) acc.push(current)
        }

        return acc
    }, [])

    return firstFilter
}


function filterName(firstFilter: Character[], randomizedArray: Character[], characterName: string, includeNameOrExactName: boolean, characterOrFullName: boolean) {
    if (characterName === "") {
        firstFilter = randomizedArray;
    }

    if (characterName !== "") {
        let resultArr: Character[] = [];
        let name = [characterName];

        if (characterName.includes(",")) name = characterName.split(",").map(current => current.trim());

        name.forEach((currentName) => {
            randomizedArray.forEach(charac => {
                let comparison;

                if (includeNameOrExactName === true) {
                    comparison = characterOrFullName === false
                        ? charac.name.toLowerCase().includes(currentName.toLowerCase())
                        : charac.biography.fullName.toLowerCase().includes(currentName.toLowerCase());
                } else {
                    comparison = characterOrFullName === false
                        ? charac.name.toLowerCase() === currentName.toLowerCase()
                        : charac.biography.fullName.toLowerCase() === currentName.toLowerCase();
                }

                if (comparison === true && (!resultArr.some(obj => obj.name === currentName) || includeNameOrExactName === true)) {
                    resultArr.push(charac);
                }
            });
        });
        firstFilter = resultArr;
    }
    return firstFilter;
}
