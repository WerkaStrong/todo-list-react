import React from "react";
import { StyledInput, Wrapper } from "./styled";
import searchQueryParamName from "../TasksList/searchQueryParamName";
import {useQueryParameter, useReplaceQueryParameter} from "./queryParameters";

export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
       replaceQueryParameter({
        key: searchQueryParamName,
        value: target.value.trim() !== "" ? target.value : undefined,
       })
    };

    return (
        <Wrapper>
            <StyledInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
}