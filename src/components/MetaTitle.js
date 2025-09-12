import { Helmet } from "react-helmet-async";
export default function MetaTitle({title}){
    return(
        <Helmet>
            <title>{`${title} MindTek Research and IT Solutions (P) Ltd.,`}</title>
        </Helmet>
    )
}