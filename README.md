# Welcome to your Lovable project

## ⚠️ Cấu hình Supabase mới

Dự án này đã được cấu hình để sử dụng cơ sở dữ liệu Supabase mới. Để hoàn tất thiết lập:

1. **Tạo project Supabase mới** tại [supabase.com](https://supabase.com)
2. **Cập nhật thông tin kết nối** trong file `src/integrations/supabase/client.ts`:
   - Thay thế `YOUR_NEW_SUPABASE_URL` bằng URL project mới
   - Thay thế `YOUR_NEW_SUPABASE_ANON_KEY` bằng anon key mới
3. **Chạy migrations** để tạo cấu trúc database:
   - Sao chép nội dung từ `supabase/migrations/` vào SQL Editor trong Supabase Dashboard
   - Chạy từng file migration theo thứ tự
4. **Tạo admin user** đầu tiên thông qua Supabase Auth
5. **Cập nhật role admin** trong bảng profiles

## Project info

**URL**: https://lovable.dev/projects/92060551-f71b-423b-8656-0ef67df9d36e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/92060551-f71b-423b-8656-0ef67df9d36e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/92060551-f71b-423b-8656-0ef67df9d36e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
