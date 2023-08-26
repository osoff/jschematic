import { useState } from "react";

export function useReadschema(data) {
  const rootSchema = data;
  const items = [];
  for (const prop in rootSchema.properties) {
    items.push(rootSchema.properties[prop]);
  }
  return items;
}
