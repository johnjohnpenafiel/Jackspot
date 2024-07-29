// src/app/collection/[collectionId]/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useCollections } from '@/hooks/useCollections';

import { AiOutlinePlus } from "react-icons/ai";

import Header from '@/components/Header';
import SpotItem from '@/components/SpotItem';
import usePostModal from "@/hooks/usePostModal";
import ModalSProvider from '@/providers/ModalSProvider';

function CollectionPage() {
  
  const { collectionId } = useParams();
  const { collections } = useCollections();
  const postModal = usePostModal();
  
  const [collection, setCollection] = useState(null);

  function handleModalCLick() {
    return postModal.onOpen()
  }

  useEffect(() => {
    const fetchedCollection = collections.find((collection) => collection.id === parseInt(collectionId, 10));
    setCollection(fetchedCollection);
  }, [collectionId, collections]);

  if (!collection) {
    return ( 
      <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header />
      </div>
    )
  }

  const spotList = collection.spots.map((spot) => <SpotItem key={spot.id} name={spot.name} type={spot.type} id={spot.id} />)

  return (
    <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className='inline-flex items-center justify-between gap-x-2'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-bold' >
            {collection.title}
          </h1>
          <ModalSProvider />
          <AiOutlinePlus onClick={handleModalCLick} size={60} className='text-neutral-500/60 cursor-pointer mt-3 hover:text-neutral-300 transition'/>
        </div>
      </Header>
      <h1 className='text-neutral-700 font-medium text-base ml-2'>Spots:</h1>
      <div>
        {spotList}
      </div>
    </div>
  );
}

export default CollectionPage;
