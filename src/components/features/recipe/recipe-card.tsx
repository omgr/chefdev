import { CardHeader,CardBody,CardFooter } from "@components/shared/ui-elements/card";
// import { CardBody } from "@components/shared/ui-elements/card/card-body";
// import { CardFooter } from "@components/shared/ui-elements/card/card-footer";

export function RecipeCard({name}){

    return (
        <>
            <div className="row-span-full margin-2">
                <h4>{name}</h4>
                <CardHeader />
                <CardBody />
                <CardFooter />
            </div>
        </>
    )
}