"use strict";
export const convertQuerySnapshotToRegularArray = (querySnapschot) => {
    return querySnapschot.docs.map((item) => ({
        id: item.id,
        ...item.data()
    }));
};