import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Tipagem para os recursos retornados pela API do Cloudinary
export interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  backup: boolean;
  asset_folder: string;
  display_name: string;
  url: string;
  secure_url: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder"); // ?folder=minha_pasta

  if (!folder) {
    return NextResponse.json(
      { error: "Informe o nome da pasta (?folder=nome_da_pasta)" },
      { status: 400 }
    );
  }

  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      max_results: 100,
    });

    const images = result.resources.filter(
      (r: CloudinaryResource) => r.asset_folder === folder
    );

    return NextResponse.json(images);
  } catch (error) {
    console.error("Erro ao listar imagens:", error);
    return NextResponse.json(
      { error: "Erro ao listar imagens do Cloudinary" },
      { status: 500 }
    );
  }
}
