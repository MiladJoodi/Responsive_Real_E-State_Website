import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

const SearchForm = () => {

    const form = useForm()
    return (
        <Form {...form}>
            <FormField control={form.control} name="address" render={({ field }) => {
                return (
                    <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Input placeholder="Search by Address"/>
                        </FormControl>
                    </FormItem>
                )
            }} />
        </Form>
    );
}

export default SearchForm;