"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "@/app/lib/constants"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const formSchema = z.object({
    name: z.string(),
    characterOrFullName: z.boolean(),
    // howMany: z.string(),
    side: z.string(),
    universe: z.string(),
    team: z.string(),
    gender: z.string(),
    race: z.string(),

    // sortBy: z.enum(sortByValues),
    sortBy: z.string(),
    // sortDirection: z.enum(['asc', 'desc'])
    sortDirection: z.string(),
})

export type sortByType = z.infer<typeof formSchema.shape.sortBy>
export type sortDirectionType = z.infer<typeof formSchema.shape.sortDirection>

export default function FilterCharacters() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: searchParams.get('characterName') ?? "",
            characterOrFullName: searchParams.get('characterOrFullName') === "true",
            // howMany: searchParams.get('howMany') ?? "16",
            side: searchParams.get('side') ?? "All",
            universe: searchParams.get('universe') ?? "All",
            team: searchParams.get('team') || 'All',
            gender: searchParams.get('gender') || 'both',
            race: searchParams.get('race') || 'All',

            sortBy: searchParams.get('sortBy') ?? "id",
            sortDirection: searchParams.get('sortDirection') ?? "desc"
        },
    })

    const sortByValues = ["name", "id", "_id", "powerstats.power", "powerstats.intelligence", "powerstats.strength", "powerstats.durability", "powerstats.combat", "powerstats.speed"]
    // const sideValues = ["All", "good", "bad", "neutral"]
    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(form.watch().universe)

    function onSubmit(values: z.infer<typeof formSchema>) {
        params.set('pageCharacters', '1');

        if (values.name !== "") {
            params.set('characterName', values.name)
        } else {
            params.delete('characterName')
        }

        params.set('characterOrFullName', values.characterOrFullName.toString())

        /* if (values.howMany !== "") {
            params.set('howMany', values.howMany)
        } else {
            params.delete('howMany')
        } */

        if (values.side !== "") {
            params.set('side', values.side)
        } else {
            params.delete('side')
        }

        if (values.universe !== "") {
            params.set('universe', values.universe)
            params.delete('team')
            if (values.team !== "") {
                params.set('team', values.team)
            }
        } else {
            params.delete('universe')
            params.delete('team')
        }

        if (values.gender !== "") {
            params.set('gender', values.gender)
        } else {
            params.delete('gender')
        }

        if (values.race !== "") {
            params.set('race', values.race)
        } else {
            params.delete('race')
        }

        params.set('sortBy', values.sortBy)
        params.set('sortDirection', values.sortDirection)

        // console.log(`${pathname}?${params.toString()}`)

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <ScrollArea className="h-[700px] w-full p-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto">
                                <FormLabel>{form.getValues().characterOrFullName ? 'Full Name' : "Name"}</FormLabel>
                                <FormControl>
                                    <Input placeholder={form.getValues().characterOrFullName ? "Bruce|Tony|Peter" : "Batman|Iron Man|Spider-Man"} {...field} />
                                </FormControl>
                                <FormDescription>
                                    Example: {form.getValues().characterOrFullName ? "Bruce|Tony|Peter" : "Batman|Iron Man|Spider-Man"}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="characterOrFullName"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                        <Label htmlFor="airplane-mode">Character {field.value === true ? "fullName" : "name"} (to search)</Label>
                                    </div>
                                </FormControl>
                                {/* <FormDescription>
                                    Example: Batman|Iron Man|Spider-Man
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* <FormField
                        control={form.control}
                        name="howMany"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel>How Many</FormLabel>
                                <FormControl>
                                    <Slider onValueChange={(value) => field.onChange(value[0].toString())} defaultValue={[parseInt(field.value)]} max={714} min={CHARACTERS_PER_PAGE} step={CHARACTERS_PER_PAGE} />
                                </FormControl>
                                <FormDescription>
                                    {field.value}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                    <FormField
                        control={form.control}
                        name="sortBy"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel>Sort By</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a way to sort" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {sortByValues.map((c) => (
                                            <SelectItem key={c} value={c}>{c}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Example: name, id, _id...
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sortDirection"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel>Sort Direction</FormLabel>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-row space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="asc" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Ascending</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="desc" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Descending</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                                <FormDescription>
                                    Example: name, id, _id...
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="side"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel>Side</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a side" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {ALLALIGMENTS.map((c) => (
                                            <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Example: good, bad, neutral
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel>Gender</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {ALLGENDERS.map((c) => (
                                            <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Example: both, female, male
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="race"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel>Race</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a race" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <ScrollArea className="h-[200px]">
                                            {ALLRACES.map((c) => (
                                                <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                            ))}
                                        </ScrollArea>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Example: human, alien, kryptonian...
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="universe"
                        render={({ field }) => (
                            <FormItem className="w-[95%] mx-auto mt-5">
                                <FormLabel>Universe</FormLabel>
                                <Select
                                    onValueChange={(e) => {
                                        field.onChange(e)
                                        form.setValue('team', 'All')
                                    }}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a universe" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <ScrollArea className="h-[200px]">
                                            {ALLUNIVERSE.map((c, index) => (
                                                <SelectItem key={`${c.value}-${index}`} value={c.value}>{c.name}</SelectItem>
                                            ))}
                                        </ScrollArea>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Example: Marvel, DC, Shueisha...
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {
                        teamByUniverse.length > 0 ?
                            <FormField
                                control={form.control}
                                name="team"
                                render={({ field }) => (
                                    <FormItem className="w-[95%] mx-auto mt-5">
                                        <FormLabel>Team</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a team" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <ScrollArea className="h-[200px]">
                                                    <SelectItem value="All">All teams</SelectItem>
                                                    {teamByUniverse.map((c, index) => (
                                                        <SelectItem key={`${c.value}-${index}`} value={c.value}>{c.name}</SelectItem>
                                                    ))}
                                                </ScrollArea>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Example: Avengers, Justice League...
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            : null
                    }

                </ScrollArea>
                <div className="w-full flex justify-end">
                    <Button type="submit">Filter</Button>
                </div>
            </form>
        </Form>

    )
}
