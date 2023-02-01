import { Disclosure } from "@headlessui/react";
import React from "react";
import NavigationModel from "../../models/navigation";

export default function NavigationItemMobile(data: NavigationModel) {
    return (<Disclosure.Button as="a">{data.title}</Disclosure.Button>)
}