import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer/footer';
import HeaderProced from '@/components/HeaderProced/header';
import { api } from '@/service';

interface ISurgeryData {
  data: [
    {
      id: number;
      attributes: {
        Name: string;
        price: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        type: string;
      };
    },
  ];
}

const estetica: React.FC = () => {
  const [surgeryData, setSurgeryDataData] = useState<ISurgeryData>({
    data: [],
  });

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.style.boxShadow = '0 0 10px rgb(155, 247, 152)';
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.style.boxShadow = 'none';
  };

  useEffect(() => {
    const getSurgeries = async () => {
      try {
        const response = await api.get('/surgeries');
        setSurgeryDataData(response.data);
        console.log(surgeryData);
      } catch (error) {
        console.log('error:', error);
      }
    };
    getSurgeries();
  }, []);

  return (
    <div>
      <HeaderProced />

      <div className="flex flex-wrap">
        {surgeryData?.data?.length > 0 &&
          surgeryData.data.map((item: any) => (
            <div key={item?.id} className="m-2">
              <div
                className="bg-white border border-black p-5 rounded-3xl w-56 h-56"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-lg font-semibold text-center mt-2">
                  {item?.attributes?.Name}
                </h3>
                <p className="text-center mt-1">
                  Valor em 12x: R$
                  {(parseFloat(item?.attributes?.price) / 12).toLocaleString()}
                </p>
                <button className="bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40">
                  Tenho interesse
                </button>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default estetica;
