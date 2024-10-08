import { Divider, StackLayout, Text } from "@salt-ds/core";
import {
  StaticList,
  StaticListItem,
  StaticListItemContent,
} from "@salt-ds/lab";
import React, { Fragment, type ReactElement } from "react";
import { type ListEvent, complexEventsData } from "./exampleData";

const ListItem = ({ title, time }: ListEvent) => (
  <StaticListItem>
    <StaticListItemContent>
      <StackLayout gap={0.5}>
        <Text color="inherit">{title}</Text>
        <Text styleAs="label" color="secondary">
          {time}
        </Text>
      </StackLayout>
    </StaticListItemContent>
  </StaticListItem>
);

export const WithDividers = (): ReactElement => (
  <div style={{ width: "80%" }}>
    <StaticList style={{ width: "320px" }}>
      {complexEventsData.map((event, _index) => (
        <Fragment key={event.title}>
          <ListItem {...event} />
          {_index < complexEventsData.length - 1 && (
            <Divider variant="tertiary" aria-hidden />
          )}
        </Fragment>
      ))}
    </StaticList>
  </div>
);