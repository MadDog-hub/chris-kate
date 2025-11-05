import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-white py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-black mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Parents Section - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-parents-groom">
              <h3 className="font-display italic text-sm text-black mb-2">Parents of the Groom</h3>
              <p className="text-black font-normal text-xs">Mr. Tomas A. Socorin</p>
              <p className="text-black font-normal text-xs">Mrs. Joji N. Socorin</p>
            </div>
            <div data-testid="section-parents-bride">
              <h3 className="font-display italic text-sm text-black mb-2">Parents of the Bride</h3>
              <p className="text-black font-normal text-xs">Mr. Noel B. Tabsing (Deceased)</p>
              <p className="text-black font-normal text-xs">Mrs. Liza L. Tabsing</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-black mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-black font-normal text-xs">Dr. Raul Teves</p>
              <p className="text-black font-normal text-xs">Mrs. Dollie Teves</p>
              <p className="text-black font-normal text-xs">Hon. Jonathan Blando</p>
              <p className="text-black font-normal text-xs">Dr. Russel Gonzales</p>
              <p className="text-black font-normal text-xs">Mr. Efren M. Ledesma</p>
              <p className="text-black font-normal text-xs">Mrs. Irene Peñamante</p>
              <p className="text-black font-normal text-xs">Mr. Rodelio Aturdido</p>
              <p className="text-black font-normal text-xs">Mrs. May Bayaras</p>
              <p className="text-black font-normal text-xs">Dr. Rogelio Aturdido, Jr.</p>
              <p className="text-black font-normal text-xs">Mrs. Ma. Josefa Trillana</p>
              <p className="text-black font-normal text-xs">Mr. Ricky Singson</p>
              <p className="text-black font-normal text-xs">Mrs. Febie Singson</p>
              <p className="text-black font-normal text-xs">Mr. Ian Tabiolo</p>
              <p className="text-black font-normal text-xs">Mrs. Donnabe Tabiolo</p>
              <p className="text-black font-normal text-xs">Mr. Antonio Angeles</p>
              <p className="text-black font-normal text-xs">Mrs. Victoria Angeles</p>
              <p className="text-black font-normal text-xs">Mr. Domingo Arellano</p>
              <p className="text-black font-normal text-xs">Mrs. Levy Arellano</p>
              <p className="text-black font-normal text-xs">Mr. Eustaquio Socorin</p>
              <p className="text-black font-normal text-xs">Mrs. Mariven Socorin</p>
              <p className="text-black font-normal text-xs">Mr. Norvel Lontiong</p>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-black mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-candle">
                <h4 className="font-bold italic text-xs text-black mb-1">Candle</h4>
                <p className="text-black font-normal text-xs">Mr. Luis Boje, III</p>
                <p className="text-black font-normal text-xs">Mrs. Hazel Joy Boje</p>
              </div>
              <div data-testid="section-cord">
                <h4 className="font-bold italic text-xs text-black mb-1">Cord</h4>
                <p className="text-black font-normal text-xs">Mr. Genesis Concillo</p>
                <p className="text-black font-normal text-xs">Mrs. Annie Grace Concillo</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-bold italic text-xs text-black mb-1">Veil</h4>
                <p className="text-black font-normal text-xs">Mr. Jobert Gil Breboneria</p>
                <p className="text-black font-normal text-xs">Mrs. Maureen Faith Breboneria</p>
              </div>
            </div>
          </div>

          {/* Wedding Party - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-best-man">
              <h4 className="font-display italic text-sm text-black mb-2">Best Man</h4>
              <p className="text-black font-normal text-xs">Gen Paul A. Bermudez</p>
            </div>
            <div data-testid="section-maid-matron-honor">
              <h4 className="font-display italic text-sm text-black mb-2">Maid of Honor & Matron of Honor</h4>
              <p className="text-black font-normal text-xs">Isza Marie N. Socorin</p>
              <p className="text-black font-normal text-xs">Katrina Ann Marie C. Alegado</p>
            </div>
          </div>

          {/* Groomsmen and Bridesmaids - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groomsmen">
              <h4 className="font-display italic text-sm text-black mb-2">Groomsmen</h4>
              <p className="text-black font-normal text-xs">Patrick John Angeles</p>
              <p className="text-black font-normal text-xs">Jasper Edgar Olarte</p>
              <p className="text-black font-normal text-xs">Mathew Ong</p>
              <p className="text-black font-normal text-xs">Gerald Dingding</p>
              <p className="text-black font-normal text-xs">Marlito Romeo</p>
              <p className="text-black font-normal text-xs">Paolo Ejercito</p>
            </div>
            <div data-testid="section-bridesmaids">
              <h4 className="font-display italic text-sm text-black mb-2">Bridesmaids</h4>
              <p className="text-black font-normal text-xs">Maria Czarena Kate Alabe</p>
              <p className="text-black font-normal text-xs">Hazel Grace Quiblat</p>
              <p className="text-black font-normal text-xs">Sheila Riz Socorin</p>
              <p className="text-black font-normal text-xs">Jessa Chenn Sombero</p>
              <p className="text-black font-normal text-xs">Dyne Christelle Sombero</p>
              <p className="text-black font-normal text-xs">Cherry Rose Navares</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
