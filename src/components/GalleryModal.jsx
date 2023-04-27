import GalleryCard from "./GalleryCard"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { HiOutlineX } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"


export default function GalleryModal({open, toggle, data}){


  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}  onClick={() => toggle(false)} className="shade bg-black/90 fixed top-0 left-0 h-screen w-screen z-[60] overflow-y-auto py-[50px] px-8">
          <div className="max-w-[900px] mx-auto" onClick={e => {e.stopPropagation()}}>
              {data.length > 0 && (
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2}}
                  >
                    <Masonry gutter="20px">
                      { data.length && data.map(item => (   
                        <GalleryCard key={item.id} item={item} />
                      ))}
                    </Masonry>
                </ResponsiveMasonry>
              )}
          </div>
          <HiOutlineX className="fixed top-8 right-8 text-white text-3xl cursor-pointer" onClick={() => toggle(false)} />
        </motion.div>
      )}
    </AnimatePresence>

  )
}