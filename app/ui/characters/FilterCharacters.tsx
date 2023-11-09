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

const sortByValues = ["name", "id", "_id", "powerstats.power", "powerstats.intelligence", "powerstats.strength", "powerstats.durability"]

const formSchema = z.object({
    name: z.string(),
    // sortBy: z.enum(sortByValues),
    sortBy: z.string(),
    // sortDirection: z.enum(['asc', 'desc'])
    sortDirection: z.string()
})

export type sortByType = z.infer<typeof formSchema.shape.sortBy>
export type sortDirectionType = z.infer<typeof formSchema.shape.sortDirection>

export default function FilterCharacters() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: searchParams.get('characterName') ?? "",
            sortBy: searchParams.get('sortBy') ?? "id",
            sortDirection: searchParams.get('sortDirection') ?? "asc"
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const params = new URLSearchParams(searchParams)
        params.set('pageCharacters', '1');

        if (values.name !== "") {
            params.set('characterName', values.name)
        } else {
            params.delete('characterName')
        }

        params.set('sortBy', values.sortBy)
        params.set('sortDirection', values.sortDirection)

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Batman, Iron Man, Spider-Man..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Example: Batman, Iron Man, Spider-Man...
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="sortBy"
                    render={({ field }) => (
                        <FormItem>
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
                        <FormItem>
                            <FormLabel>Sort By</FormLabel>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
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
                <Button type="submit">Filter</Button>
            </form>
        </Form>
    )
}
