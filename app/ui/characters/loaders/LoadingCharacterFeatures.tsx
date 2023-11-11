import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoadingFeatureTab from "./LoadingFeatureTab";

export default function LoadingCharacterFeatures(){
    return(
        <Tabs
            defaultValue={'Stats'}
            className="w-full"
        >
            <TabsList className={`grid w-full grid-cols-5 bg-accent`}>
                <TabsTrigger className='text-base-content hidden md:block' value="Stats">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Stats">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Appereance">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Appereance">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Biography">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Biography">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Teams">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Teams">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Comics">&nbsp; &nbsp; &nbsp; </TabsTrigger>
                <TabsTrigger className='text-base-content block md:hidden' value="Comics">&nbsp; &nbsp; &nbsp; </TabsTrigger>
            </TabsList>
            <LoadingFeatureTab value="Stats" />
            <LoadingFeatureTab value="Appereance" />
            <LoadingFeatureTab value="Biography" />
            <LoadingFeatureTab value="Teams"/>
            <LoadingFeatureTab value="Comics"/>
        </Tabs>
    )
}