import Image from 'next/image'
import Link from "next/link";
import { RoadSign } from '@/data/road-signs';
import { cn } from "@/lib/utils";

export function RoadSignList({ signs }: { signs: RoadSign[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {signs.map((sign) =>
        sign.mapsUrl ?
          <Link key={sign.id} target="_blank" href={sign.mapsUrl}>
            <RoadSignImage sign={sign} />
          </Link>
          : <RoadSignImage key={sign.id} sign={sign} />

      )}
    </div>
  )
}

function RoadSignImage({ sign }: { sign: RoadSign }) {
  return <div className={cn("border rounded-lg p-4 transition-colors flex flex-col items-center gap-2", sign.mapsUrl && "hover:bg-primary/10")}>
    <Image
      src={sign.imageUrl}
      alt={`${sign.country} road sign`}
      width={100}
      height={100}
    />
    <h2 className="text-lg font-semibold">{sign.country}</h2>
    <code className="rounded-md bg-primary/10 p-2">
      id: {sign.id}
    </code>
  </div>

}
