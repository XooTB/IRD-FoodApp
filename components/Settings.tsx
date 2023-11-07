"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Settings as Gear } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const Settings: React.FC = () => {
  const [fontSize, setFontSize] = React.useState(33);

  const handleSlider = (value: number[]) => {
    console.log(setFontSize(value[0]));
  };

  return (
    <div className="w-1/5 bg-white dark:bg-slate-700 h-fit rounded-lg px-5 py-5">
      <div className="border rounded-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="settings">
            <AccordionTrigger className="text-primary px-2 flex items-start">
              <Gear
                className="border border-primary px-1 py-1 rounded-sm"
                size={26}
              />{" "}
              Settings{" "}
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-3">
                <div className="text-current flex justify-between mb-5">
                  <p className="font-semibold">Paragraph font Size: </p>
                  <p className="text-primary">{fontSize}</p>
                </div>
                <Slider
                  defaultValue={[fontSize]}
                  max={100}
                  step={1}
                  onValueChange={handleSlider}
                />
                <div className="my-4">
                  <h1 className="mb-2 font-semibold">Choose Vitamin Type: </h1>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="VitaminA"
                        className="hover:cursor-pointer"
                      >
                        Vitamin A
                      </SelectItem>
                      <SelectItem
                        value="VitaminB"
                        className="hover:cursor-pointer"
                      >
                        VitaminB
                      </SelectItem>
                      <SelectItem
                        value="VitaminC"
                        className="hover:cursor-pointer"
                      >
                        VitaminC
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">Turn Off Subtitles</p>
                  <Switch />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Settings;
