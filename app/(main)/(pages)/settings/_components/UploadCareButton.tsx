/* 'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }

    //@ts-ignore
    ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
    
  }, [])

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="39b708ed8eefcd9bb907"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton */

type Props = {
  onUpload: (e: string) => any
}

import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

LR.registerBlocks(LR);

function App({onUpload}:Props) {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }

    //@ts-ignore
    ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
    
  }, [])


  return (
    <div>
      {/*Change the pubkey value to your project public key from project settings*/}
      <lr-config ctx-name="my-uploader" pubkey="f7f8d4e0f5616dba10ef" />
      <lr-file-uploader-regular
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.30.0/web/lr-file-uploader-regular.min.css"
        ctx-name="my-uploader"
        
      />

    <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  );
}

export default App;