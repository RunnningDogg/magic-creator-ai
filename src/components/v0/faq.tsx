/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q78qlbK
 */
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

export default function FAQ() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[550px] shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="mt-4 w-full" collapsible type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:underline-none">
                Why does turning my device off and on again solve all issues?
              </AccordionTrigger>
              <AccordionContent>
                Because it clears the memory and starts the system from scratch.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b-0" value="item-5">
              <AccordionTrigger className="hover:underline-none">
                Why does my device get hot when I'm using it?
              </AccordionTrigger>
              <AccordionContent>
                Devices can generate heat during operation, especially when
                running intensive tasks. This is normal, but if it gets too hot,
                it may indicate a problem.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
