import Image from 'next/image'
import Link from "next/link";
import { RoadSign } from '@/data/road-signs';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function RoadSignList({ signs }: { signs: RoadSign[] }) {
  return (
    <ScrollArea className="h-screen w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {signs.map((sign) => (
          <div key={sign.id} className={cn("border rounded-lg p-4 transition-colors flex flex-col items-center gap-2", sign.mapsUrl && "hover:bg-primary/10")}>
            {sign.mapsUrl ?
              <Link target="_blank" href={sign.mapsUrl}>
                <RoadSignImage sign={sign} />
              </Link>
              : <RoadSignImage sign={sign} />}
            <h2 className="text-lg font-semibold">{sign.country}</h2>
            <code className="rounded-md bg-primary/10 p-2">
              id: {sign.id}
            </code>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

function RoadSignImage({ sign }: { sign: RoadSign }) {
  return <Image
    src={sign.imageUrl}
    alt={`${sign.country} road sign`}
    width={96}
    height={96}
    style={{ width: 96, height: 96 }}
  />
}
