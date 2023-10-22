"use client"

import React from 'react';
import { useRouter } from 'next/router';

export const RouterSlug = (props) => {

    const router = useRouter();

    const id: (string | string[] | undefined) = router.query.id;

    const idToParse: string = Array.isArray(id) ? id[0] : (typeof id === 'string' ? id : '');

    props.callParentFunc(idToParse);

    return <span></span>

}