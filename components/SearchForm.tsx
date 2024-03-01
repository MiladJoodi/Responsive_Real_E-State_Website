"use client"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

function generatePriceValue (){
    let price = []
    for(let i=1; i<=6; i++){
        price.push(i * 100);
    }
    return price;
}

const SearchForm = () => {

    const form = useForm()
    return (
        <Form {...form}>
            <form className="p-6 max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end bg-background rounded">
                <FormField control={form.control} name="address" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Search by Address" {...field} />
                            </FormControl>
                        </FormItem>
                    )
                }} />

                <FormField control={form.control} name="address" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Categories</FormLabel>
                            <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">House</SelectItem>
                                    <SelectItem value="dark">Apartment</SelectItem>
                                    <SelectItem value="system">Office</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>

                    )
                }} />

                <FormField control={form.control} name="address" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Categories</FormLabel>
                            <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">House</SelectItem>
                                    <SelectItem value="dark">Apartment</SelectItem>
                                    <SelectItem value="system">Office</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>

                    )
                }} />


            </form>
        </Form>
    );
}

export default SearchForm;