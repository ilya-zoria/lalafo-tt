"use client";

import {
  ChevronRight,
  CircleX,
  MapPin,
  Phone,
  Plus,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function SectionGap() {
  return <div className="h-4 w-full bg-[var(--light-grey)]" />;
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-s1 text-foreground">{children}</p>;
}

function PhotoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn("shrink-0 rounded-md bg-[var(--light-grey)]", className)}
    />
  );
}

function PhotoGrid() {
  return (
    <div className="px-4 pb-6 pt-6">
      <div className="flex gap-1">
        <PhotoPlaceholder className="size-[93px]" />
        <div className="grid grid-cols-3 gap-px">
          {Array.from({ length: 5 }).map((_, i) => (
            <PhotoPlaceholder key={i} className="size-[46px]" />
          ))}
          <button
            type="button"
            className="flex size-[46px] items-center justify-center rounded-md bg-[var(--light-grey)] text-muted-foreground"
            aria-label="Add photo"
          >
            <Plus className="size-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

function HeaderBar() {
  return (
    <header className="border-b border-[var(--grey-01)] bg-background">
      <div className="flex h-12 items-center px-4">
        <button
          type="button"
          className="flex size-6 items-center justify-center text-foreground"
          aria-label="Close"
        >
          <X className="size-6" strokeWidth={1.5} />
        </button>
        <h1 className="text-s1 flex-1 text-center text-foreground">Your ad</h1>
        <div className="size-6" />
      </div>
    </header>
  );
}

function ProgressSection() {
  return (
    <section className="border-b border-[var(--grey-01)] px-4 pb-3 pt-2">
      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-p2 text-foreground">Item completeness</span>
        <span className="text-s3 text-foreground">30%</span>
      </div>
      <Progress value={30} className="mb-2" />
      <p className="text-caption-1 text-muted-foreground">
        Add more info to sell faster
      </p>
    </section>
  );
}

function DescriptionSection() {
  return (
    <section className="border-b border-[var(--grey-01)] px-4 py-3">
      <FieldLabel>Description</FieldLabel>
      <div className="mt-2">
        <Textarea
          defaultValue="Description written by user"
          className="min-h-[98px] resize-none"
        />
        <p className="text-caption-1 mt-1 text-right text-muted-foreground">
          0/1000
        </p>
      </div>
    </section>
  );
}

function ParametersSection() {
  return (
    <section>
      <div className="px-4 py-3">
        <FieldLabel>Parameters</FieldLabel>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-p2 text-destructive">Select a category*</p>
          <Select>
            <SelectTrigger
              className="h-8 w-[73px] border-primary px-4 text-button-m text-primary shadow-none hover:bg-[var(--extra-light-grey)] [&_svg]:hidden"
              size="sm"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper" className="w-[343px]">
              <SelectItem value="vehicles">Vehicles</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="real-estate">Real estate</SelectItem>
              <SelectItem value="services">Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 pb-4">
        <div>
          <FieldLabel>Price</FieldLabel>
          <div className="relative mt-2">
            <Input defaultValue="2000" className="pr-10" />
            <button
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
              aria-label="Clear price"
            >
              <CircleX className="size-4" />
            </button>
          </div>
        </div>
        <div>
          <FieldLabel>Currency</FieldLabel>
          <RadioGroup
            defaultValue="usd"
            className="mt-3 flex items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="kgs" id="kgs" />
              <Label htmlFor="kgs" className="text-p1 font-normal">
                KGS
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="usd" id="usd" />
              <Label htmlFor="usd" className="text-p1 font-normal">
                USD
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </section>
  );
}

function PhoneSection() {
  return (
    <section className="px-4 py-4">
      <FieldLabel>Phone number</FieldLabel>
      <div className="mt-2 flex h-12 items-center gap-2 rounded-md border border-input bg-background px-3">
        <Phone className="size-4 shrink-0 text-muted-foreground" />
        <span className="text-p1 text-foreground">+996</span>
        <Input
          defaultValue="123 456789"
          className="h-auto flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Checkbox id="hide-phone" />
        <Label
          htmlFor="hide-phone"
          className="text-p2 font-normal text-muted-foreground"
        >
          Hide phone number
        </Label>
      </div>
    </section>
  );
}

function AddressSection() {
  return (
    <section className="px-4 pt-4 pb-4">
      <FieldLabel>Address</FieldLabel>
      <button
        type="button"
        className="mt-2 flex h-12 w-full items-center gap-3 rounded-md border border-input bg-background px-3 text-left"
      >
        <MapPin className="size-4 shrink-0 text-muted-foreground" />
        <span className="text-p1 flex-1 text-foreground">Bishkek</span>
        <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
      </button>
      <div className="mt-3 overflow-hidden rounded-md border border-input">
        <iframe
          title="Map preview — Bishkek"
          src="https://www.openstreetmap.org/export/embed.html?bbox=74.53%2C42.82%2C74.65%2C42.90&layer=mapnik&marker=42.87%2C74.59"
          className="h-[100px] w-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function YourAdScreen() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[var(--extra-light-grey)] py-6">
      <div className="flex w-[375px] flex-col overflow-hidden rounded-lg bg-background shadow-lg">
        <div className="flex-1 overflow-y-auto">
          <HeaderBar />
          <ProgressSection />
          <div className="border-b border-[var(--grey-01)]">
            <PhotoGrid />
          </div>
          <DescriptionSection />
          <SectionGap />
          <ParametersSection />
          <SectionGap />
          <PhoneSection />
          <SectionGap />
          <AddressSection />
        </div>
        <footer className="border-t border-[var(--grey-01)] bg-background p-4">
          <Button size="publish">Publish</Button>
        </footer>
      </div>
    </div>
  );
}
